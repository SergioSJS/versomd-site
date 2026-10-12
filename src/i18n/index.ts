import { en } from "./en";
import { ptBR } from "./pt-BR";
import type { Copy, Lang } from "./types";

export const copies: Record<Lang, Copy> = { "pt-BR": ptBR, en };
export type { Copy, Figure, Lang } from "./types";
