type DataProps = {
  schedule: {
    months:
    {
      [month: string]: {
        [day: string]: {
          [hour: string]: {
            name: string,
            product: string,
            goal: string
            phone: string
            date: {
              hour: string,
              day: string,
              month: string
            }
          }
        }
      }
    }
  },
  clients: { name: string, phone: string, goal: string, date?: { hour: string, day: string, month: string }, product: string[] }[]
}

export type { DataProps }
