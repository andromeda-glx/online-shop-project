/* eslint-disable react/prop-types */
export default function CheckoutInvoice({ title, value }) {
    return (
        <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-500">{value}</p>
        </div>
    )
}
