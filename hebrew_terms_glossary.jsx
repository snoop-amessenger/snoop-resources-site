import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const glossary = [
  { english: "God", hebrew: "Yahuah (יהוה)", meaning: "The true, revealed Name of the Almighty (Exodus 3:15)" },
  { english: "Lord", hebrew: "Adonai (אֲדֹנָי)", meaning: "Respectful title meaning 'Master,' but not His Name" },
  { english: "Holy", hebrew: "Kodesh (קֹדֶשׁ)", meaning: "Set-apart for Yahuah, not linked to pagan words" },
  { english: "Church", hebrew: "Kahal (קָהָל) / Edah (עֵדָה)", meaning: "Assembly of Yahuah’s people (Acts 7:38)" },
  { english: "Glory", hebrew: "Kavod (כָּבוֹד)", meaning: "The presence and honor of Yahuah" },
  { english: "Amen", hebrew: "Amein (אָמֵן)", meaning: "'So be it'—linked to emunah (faithfulness)" },
  { english: "Jesus", hebrew: "Yahusha (יהושע)", meaning: "'Yahuah is salvation,' His true Hebrew name" },
  { english: "Christ", hebrew: "Mashiach (מָשִׁיחַ)", meaning: "'Anointed one,' not a Greek or Latin term" },
  { english: "Cross", hebrew: "Etz (עֵץ) / Tav (תָּו)", meaning: "'Tree' or 'Mark,' referring to execution stake" },
  { english: "Saint", hebrew: "Kadosh (קָדוֹשׁ)", meaning: "Set-apart one devoted to Yahuah" },
  { english: "Hallelujah", hebrew: "Hallel Yah (הַלְלוּיָהּ)", meaning: "'Praise Yahuah' in its correct form" },
  { english: "Baptism", hebrew: "Mikvah (מִקְוֶה)", meaning: "Full-body immersion in living water" },
  { english: "Grace", hebrew: "Chen (חֵן) / Chesed (חֶסֶד)", meaning: "Favor or loving-kindness from Yahuah" },
  { english: "Mercy", hebrew: "Rachamim (רַחֲמִים)", meaning: "Compassion, covenant love from Yahuah" },
  { english: "Easter", hebrew: "Pesach (פֶּסַח)", meaning: "The true feast of deliverance" },
  { english: "Sunday", hebrew: "Yom Rishon (יוֹם רִאשׁוֹן)", meaning: "'First day'—not linked to sun worship" },
  { english: "Bible", hebrew: "Ketuvim (כְּתוּבִים) / Seferim (סְפָרִים)", meaning: "The Writings or Books" },
  { english: "Divine", hebrew: "Elohim (אֱלֹהִים)", meaning: "Term for mighty ones, only used for Yahuah in context" },
  { english: "Gospel", hebrew: "Besorah (בְּשׂוֹרָה)", meaning: "'Good news'—the message of Yahuah’s kingdom" },
  { english: "Heaven", hebrew: "Shamayim (שָׁמַיִם)", meaning: "The heavens, Yahuah’s dwelling place" },
  { english: "Hell", hebrew: "Sheol (שְׁאוֹל) / Gehenna (גֵּיהִנּוֹם)", meaning: "Grave or place of judgment" },
  { english: "Angel", hebrew: "Mal'akh (מַלְאָךְ)", meaning: "Messenger, referring to celestial beings" },
  { english: "Demon", hebrew: "Shedim (שֵׁדִים)", meaning: "Unclean spirits, adversaries of Yahuah" },
  { english: "Prophet", hebrew: "Navi (נָבִיא)", meaning: "Spokesperson of Yahuah" },
  { english: "Mystery", hebrew: "Sod (סוֹד)", meaning: "Hidden wisdom revealed by Yahuah" },
  { english: "Covenant", hebrew: "Brit (בְּרִית)", meaning: "A binding agreement with Yahuah" },
  { english: "Law", hebrew: "Torah (תוֹרָה)", meaning: "Instruction, guidance—not a legalistic term" },
  { english: "Commandments", hebrew: "Mitzvot (מִצְוֹת)", meaning: "Divine instructions from Yahuah" },
  { english: "Kingdom", hebrew: "Malkut (מַלְכוּת)", meaning: "The reign and rule of Yahuah" },
  { english: "Spirit", hebrew: "Ruach (רוּחַ)", meaning: "The breath and presence of Yahuah" },
  { english: "Truth", hebrew: "Emet (אֱמֶת)", meaning: "That which is firm, reliable, and righteous" },
  { english: "Wisdom", hebrew: "Chokmah (חָכְמָה)", meaning: "Understanding and insight from Yahuah" },
  { english: "Love", hebrew: "Ahavah (אַהֲבָה)", meaning: "Deep, committed love" },
  { english: "Peace", hebrew: "Shalom (שָׁלוֹם)", meaning: "Wholeness, well-being, completeness" },
  { english: "Repentance", hebrew: "Teshuvah (תְּשׁוּבָה)", meaning: "Returning to Yahuah’s ways" }
];

export default function HebrewGlossary() {
  const [search, setSearch] = useState("");

  const filtered = glossary.filter(entry =>
    entry.english.toLowerCase().includes(search.toLowerCase()) ||
    entry.hebrew.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hebrew Glossary of Set-Apart Terms</h1>
      <Input
        placeholder="Search term..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />
      <div className="grid gap-4">
        {filtered.map((entry, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Card>
                <CardContent className="p-4">
                  <p className="font-semibold text-lg">{entry.english} → <span className="text-blue-700">{entry.hebrew}</span></p>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm max-w-xs">{entry.meaning}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
