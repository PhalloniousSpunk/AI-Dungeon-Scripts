const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase()
  text = text.replace(/([\n\r](?!([\n\r])))(?<!(^[\n\r]))/gm, "\n\n");
  text = text.replace(/(^(?<!([^])))(?=($))/gm, "\n");
  text = text.replace(/[\r\n](?![^])/gm, "");
  return { text }
}

modifier(text)
