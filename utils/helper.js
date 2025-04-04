export function saveCart(state) {
  localStorage.setItem("myCart", JSON.stringify(state));
}

export function LoadCartFromLoacl() {
  return JSON.parse(localStorage.getItem("myCart"));
}
