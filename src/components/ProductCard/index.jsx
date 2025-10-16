export const ProductCard = ({title,description,price,img}) => {
    return (
        <div className="w-full p-4 bg-white rounded-2xl border border-slate-700">
            <figure className="flex items-center justify-center">
                <img src={img} alt={title} className="object-contain  h-[320px]" />
            </figure>

            <article className="space-y-2">
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="text-left">{description}</p>

                <p className="text-2xl font-black">{price}</p>
            </article>
        </div>
    )
}