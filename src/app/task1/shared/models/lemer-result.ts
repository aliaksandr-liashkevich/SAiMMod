export class LemerResult {
  constructor(
    public normalizedRandomNumbers: number[],
    public expectancy: number,
    public dispersion: number,
    public sqrDivergence: number,
    public period: number,
    public cNumbers: number[],
    public yScaleMin: number,
    public yScaleMax: number,
    public indirectTest: number
  ) { }
}
