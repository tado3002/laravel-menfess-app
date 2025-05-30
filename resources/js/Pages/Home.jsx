import MenfessList from '@/Components/MenfessesList';
import MenfessForm from '@/Components/MenfessForm';
import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Home() {
    const { props } = usePage();
    const user = props.auth?.user;
    const data = props.data

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
            <h1 className="text-3xl font-bold mb-6">Menfess App</h1>
            <p className="mb-4 text-gray-700">Kirim confessmu secara anonim</p>
            <div>
                <MenfessForm user={user} />
            </div>

            <div>
                <MenfessList menfesses={data} />
            </div>
        </div>
    );
}
