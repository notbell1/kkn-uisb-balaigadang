import rawData from "../../data/structure.json";
import { StructureNode } from "../../types/structure";

interface RawStructureRecord {
  id?: number;
  name?: string;
  nim?: string;
  position?: string;
  division?: string;
  parent_id?: number | null;
  photo?: string;
}

export function getFlatStructure(): StructureNode[] {
  if (!Array.isArray(rawData)) {
    console.error("Structure JSON bukan array:", rawData);
    return [];
  }

  return (rawData as RawStructureRecord[])
    .filter((row) => row.name && row.position)
    .map((row) => ({
      id: row.id ?? 0,
      name: row.name?.trim() || "",
      nim: row.nim?.trim() || "",
      position: row.position?.trim() || "",
      division: row.division?.trim() || "",
      parent_id: row.parent_id ?? null,
      photo: row.photo?.trim() || "/images/members/2359201001.webp",
    }))
    .sort((a, b) => a.id - b.id);
}

export function getStructureTree(): StructureNode[] {
  const flat = getFlatStructure();

  const map = new Map<number, StructureNode>();
  const roots: StructureNode[] = [];

  flat.forEach((node) => {
    map.set(node.id, {
      ...node,
      children: [],
    });
  });

  flat.forEach((node) => {
    const currentNode = map.get(node.id);

    if (!currentNode) return;

    if (node.parent_id === null || !map.has(node.parent_id)) {
      roots.push(currentNode);
    } else {
      const parent = map.get(node.parent_id);

      if (parent) {
        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(currentNode);
      }
    }
  });

  return roots;
}
