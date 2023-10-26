
export interface CryptoListResponse{
    data: Crypto[];
    timestamp: number;
}


export interface Crypto {
    id:                string;
    rank:              number | string;
    symbol:            string;
    name:              string;
    supply:            string;
    maxSupply:         null | string;
    marketCapUsd:      string;
    volumeUsd24Hr:     string;
    priceUsd:          string;
    changePercent24Hr: string;
    vwap24Hr:          string;
    explorer:          string;
}

