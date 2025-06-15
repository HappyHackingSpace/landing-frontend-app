import React from "react";

import { StatItem } from "@hhs/types/community-stats";
import { defaultStats } from "@hhs/constants/community-stats";
import { Card, CardContent } from "../shadcn/card";
import { Badge } from "../shadcn/badge";

interface CommunityStatsProps {
  stats?: StatItem[];
}

const CommunityStats: React.FC<CommunityStatsProps> = ({
  stats: customStats,
}) => {
  const stats = customStats || defaultStats;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-mono text-foreground mb-4 tracking-[.05em]">
            Topluluk İstatistikleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono tracking-[.05em]">
            Happy Hacking Space topluluğumuzun büyüyen gücü ve etkinliği
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold mb-2 font-mono tracking-[.05em] text-card-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium font-mono tracking-[.05em]">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 font-mono tracking-[.05em]"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Topluluk aktif olarak büyüyor!
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
