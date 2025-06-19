import { useState, useMemo } from 'react';
import data from "@/public/data/history.json";
export default function ArtistSearch({ data }) {
  const [search, setSearch] = useState('');

  // Extrai e filtra nomes únicos de artistas
  const filteredArtists = useMemo(() => {
    const names = data
      .map((item) => item.master_metadata_album_artist_name)
      .filter(Boolean); // remove undefined/null

    const unique = [...new Set(names)]; // remove duplicados

    return unique.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Barra de pesquisa */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar artistas..."
        className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Lista de artistas */}
      <div className="mt-4 space-y-2 max-h-[300px] overflow-y-auto">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-3 shadow hover:bg-gray-200 transition"
            >
              <span className="text-gray-800 font-medium">{artist}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center mt-4">Nenhum artista encontrado.</p>
        )}
      </div>
    </div>
  );
}
