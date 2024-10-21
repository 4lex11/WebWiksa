import React from 'react'

export default function Precio({price,locale,currency}) {
    const formatPrice = () =>
        new Intl.NumberFormat(locale, {
            style: 'currency',
            currency }).format(price);

  return (
    <span>{formatPrice()}</span>
  )
}

Precio.defaultProps = {
    locale: 'es-PE',
    currency: 'SOL',
}