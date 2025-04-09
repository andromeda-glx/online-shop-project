/* eslint-disable react/prop-types */
export default function CheckoutInvoice({ title, value, titleStyles, valueStyles }) {
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
