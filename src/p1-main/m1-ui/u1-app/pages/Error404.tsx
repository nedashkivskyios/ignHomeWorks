import React from 'react'


const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "600px",
  height: "300px",
  color: "#d74a5c",
  fontSize: "52px",
  fontWeight: 700
}


function Error404() {
  return (
    <div style={styles as React.CSSProperties}>
      <div>404</div>
      <div>Page not found!</div>
      <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
    </div>
  )
}

export default Error404
