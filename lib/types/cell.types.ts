enum CellNames {
  cell1 = 'cell1',
  cell2 = 'cell2',
}

type Cell = {
  amount: number;
  donations: number;
};

export type CellResults = {
  [key in CellNames]: Cell;
};
