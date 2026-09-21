import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { MemberGrid } from "../components/members/MemberGrid";
import { getMembers } from "../lib/csv/members";

export const MembersPage: React.FC = () => {
  const members = getMembers();

  return (
    <main className="min-h-screen bg-black text-white">
      <Container size="wide">
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <SectionTitle
            title="Mahasiswa KKN UISB 2026"
            description="21 mahasiswa lintas disiplin ilmu yang membawa gagasan, energi, dan kontribusi nyata untuk masyarakat Kelurahan Balai Gadang."
            theme="dark"
          />

          <section
            aria-label="Daftar mahasiswa KKN UISB 2026"
            className="mt-8 sm:mt-10 lg:mt-12"
          >
            <MemberGrid members={members} />
          </section>
        </div>
      </Container>
    </main>
  );
};
