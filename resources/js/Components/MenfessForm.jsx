import React from 'react';
import { useForm } from '@inertiajs/react';

export default function MenfessForm({ user }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        content: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/menfesses', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 space-y-4">
            <h2 className="text-xl font-semibold">Kirim Menfess</h2>

            <div>
                <textarea
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={6}
                    placeholder="Tulis isi menfess kamu di sini..."
                ></textarea>
                {errors.content && (
                    <p className="text-red-500 text-sm mt-1">{errors.content}</p>
                )}
            </div>
            {user ? (
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {processing ? 'Mengirim...' : 'Kirim pesan'}
                </button>
            ) : (
                <a
                    href="/auth/google/redirect"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
                >
                    Login untuk pesan
                </a>
            )}
        </form>
    );
}
