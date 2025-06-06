import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { db } from '@/lib/db/db';
import { users } from '@/lib/db/schema';
import { InferInsertModel } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email, id } = await request.json();

    if (user.id !== id || user.email !== email) {
      return NextResponse.json({ error: 'Mismatched user ID or email' }, { status: 403 });
    }

    const newUser: InferInsertModel<typeof users> = {
      id: user.id,
      email: user.email!,
    };

    await db.insert(users).values(newUser);

    return NextResponse.json({ message: 'User added to database successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error in /api/user:', error);
    return NextResponse.json({ error: error.message, details: error }, { status: 500 });
  }
} 