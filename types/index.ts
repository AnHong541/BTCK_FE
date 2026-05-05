export interface Province {
  id: string;
  name: string;
  region: "north" | "central" | "south";
}

export interface HistoryEvent {
  year: string;
  text: string;
}

export interface KeyLocation {
  name: string;
  coords: [number, number];
  note: string;
}

export interface HistoricalSource {
  type: "vietnam" | "france" | "memoir" | "digital";
  title: string;
  detail: string;
}

export interface Perspective {
  side: string;
  view: string;
}

export interface BattleDetail {
  id: string;
  name: string;
  year: string;
  summary: string;
  troops: string;
  casualty: string;
  result: string;
  events: HistoryEvent[];
  locations?: KeyLocation[];
  perspectives?: Perspective[];
  sources?: HistoricalSource[];
  images?: string[];
}

export interface BattleInfo {
  name: string;
  role: string;
  summary: string;
  hot: boolean;
  totalBattles: number;
  battles: BattleDetail[];
}

export interface Commander {
  id: string;
  name: string;
  title: string;
  province: string;
  era: string;
  description: string;
  imageUrl?: string;
}

export interface Front {
  id: string;
  name: string;
  province: string;
  period: string;
  era: string;
  description: string;
  result: string;
}

export interface Casualty {
  id: string;
  battle: string;
  period: string;
  casualties: string;
  note: string;
  result: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  era: string;
  commander?: string;
  troops?: string;
  casualty?: string;
  result?: string;
  significance?: string;
}

export interface MilitaryForce {
  id: string;
  name: string;
  founded: string;
  role: string;
  description: string;
  tag: string;
}

export type Era = "khangphap" | "khangmy";
