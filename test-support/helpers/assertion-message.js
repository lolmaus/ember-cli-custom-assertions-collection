export default function assertionMessage (foo, bar) {
  return bar && bar.length ? `${bar}: ${foo}` : foo;
}
