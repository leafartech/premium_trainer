export type TableProps = {
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
                            hour: string
                        }
                    }
                }
            }
        }
    },
    clients: { name: string, phone: string, goal: string }[]
}