import { useEffect, useState } from 'react';
import { Chart, Line } from 'bizcharts';
import { Card } from 'antd';
import API_BASE_URL from "../../constant.ts";

interface Payment {
    id: string;
    amount: number;
}

const Index = () => {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [totalSales, setTotalSales] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/payments`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const paymentsInRupees = data.payments.data.map((payment: Payment) => ({
                    ...payment,
                    amount: payment.amount / 100
                }));
                setPayments(paymentsInRupees);

                const total = paymentsInRupees.reduce((acc, curr) => acc + curr.amount, 0);
                setTotalAmount(total);

                const totalSales = paymentsInRupees.length;
                setTotalSales(totalSales);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Payment Amounts</h2>
            <div className="flex justify-between mb-4">
                <div className={"flex flex-col gap-4"}>
                    <Card title="Total Amount" className="w-[300px]">
                        <p className="text-lg font-semibold">&#8377; {totalAmount}</p>
                    </Card>
                    <Card title="Total Sales" className="w-[300px]">
                        <p className="text-lg font-semibold">{totalSales}</p>
                    </Card>
                </div>
                <Card title="Sales Chart" className="w-2/3">
                    <Chart
                        height={300}
                        autoFit
                        data={payments}
                        scale={{ amount: { min: 0 } }}
                        interactions={['element-active']}
                    >
                        <Line shape="smooth" position="id*amount" />
                    </Chart>
                </Card>
            </div>
        </div>
    );
};

export default Index;
