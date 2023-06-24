export interface Client {
  id: string,
  name: string,
  reports?: {
    report1: string,
    report2: string,
    report3: string,
  }
}

// export interface ReportsInterface {
//   report1: string,
//   report2: string,
//   report3: string
// }