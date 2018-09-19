import { Histogram } from "./histogram";

export class DistributionResult {
    constructor(
        public dispersion: number,
        public sqrDivergence: number,
        public expectancy: number,
        public histogram: Histogram,
    ) { }
}