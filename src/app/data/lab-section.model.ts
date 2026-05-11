export interface LabSection {
  readonly order: string;
  readonly path: string;
  readonly shortTitle: string;
  readonly title: string;
  readonly summary: string;
  readonly learningGoals: readonly string[];
}
