import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export const NotFoundPage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 min-h-[75vh] flex items-center justify-center bg-[#0B172A] text-slate-100">
      <Container size="narrow" className="text-center">
        <div className="p-8 sm:p-14 rounded-2xl bg-[#112240] border border-slate-800 shadow-xl max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2DD4BF] block mb-2">
            Halaman Tidak Ditemukan
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl text-white mb-4">
            404
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light mb-8 leading-relaxed">
            Halaman arsip yang Anda cari tidak tersedia atau alamat URL telah dipindahkan.
          </p>
          <Button href="/" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Button>
        </div>
      </Container>
    </main>
  );
};
