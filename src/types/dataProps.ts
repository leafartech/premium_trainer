type DataProps = {
  schedule: {
    months: {
      [month: string]: {
        [day: string]: {
          [hour: string]: {
            name: string
            product: string
            goal: string
            phone: string
            date: {
              hour: string
            }
          }
        }
      }
    }
  }
}

export type { DataProps }
