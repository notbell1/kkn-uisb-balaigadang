export interface StructureNode {
  id: number;
  name: string;
  nim: string;
  position: string;
  division: string;
  parent_id: number | null;
  photo: string;
  children?: StructureNode[];
}
