const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase()
  text = text.replace(/[\r\n](?![^])/gm, "");
  return { text }
}
modifier(text)
