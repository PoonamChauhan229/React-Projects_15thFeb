import React from 'react'

export default function Footer(props) {
  return (
    <div class="card-footer bg-dark text-white">
    @copyright {props.year} {props.month}
  </div>
  )
}
