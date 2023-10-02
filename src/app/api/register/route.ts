import prisma from '@/lib/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, email, password, confirmPassword, message } = body;

    if (!username || !email || !password || !confirmPassword || !message) {
      return NextResponse.json(
        {
          message: 'Missing fields',
        },
        {
          status: 400,
        }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: 'Passwords do not match' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            name: username,
          },
          {
            email,
          },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: 'User already exists',
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: username,
        email,
        hashedPassword,
        emailVerified: new Date(),
        message,
      },
    });

    return NextResponse.json({ status: 201 }, user);
  } catch (error) {
    console.log('[REGISTER_POST]', error);
    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
}
