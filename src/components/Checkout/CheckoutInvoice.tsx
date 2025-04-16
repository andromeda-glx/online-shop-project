type CheckoutInvoiceProps = {
    title: string;
    value: string;
    titleStyles: string;
    valueStyles: string;
}

const CheckoutInvoice = ({ title, value, titleStyles, valueStyles }: CheckoutInvoiceProps) => {
    return (
        <div>
            <h3
                className={`${titleStyles ? titleStyles : "font-semibold"}`}
            >
                {title}
            </h3>
            <p
                className={`${valueStyles ? valueStyles : "text-gray-500"}`}
            >
                {value}
            </p>
        </div>
    )
}

export default CheckoutInvoice;