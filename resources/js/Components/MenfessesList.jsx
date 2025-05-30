import React from "react";

export default function MenfessList({ menfesses }) {

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Daftar Menfess</h1>
            <div className="space-y-4">
                {menfesses.length === 0 && (
                    <p className="text-gray-500">Belum ada pesan menfess.</p>
                )}

                {menfesses.map((m) => (
                    <div
                        key={m.id}
                        className="p-4 bg-white shadow rounded-lg border border-gray-200"
                    >
                        <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
                            <span>
                                <span className="italic text-gray-400">Anonim</span>
                            </span>
                            <span>{new Date(m.created_at).toLocaleString()}</span>
                        </div>
                        <p className="text-gray-800 whitespace-pre-line">{m.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
