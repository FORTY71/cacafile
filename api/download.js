export default async function handler(req, res) {

  const fileURL =
    "https://raw.githubusercontent.com/FORTY71/cacafile/main/UYywagdwyu2waud.bin";

  const response = await fetch(fileURL);

  if (!response.ok) {
    return res.status(500).send("File not found");
  }

  const buffer = Buffer.from(
    await response.arrayBuffer()
  );

  res.setHeader(
    "Content-Type",
    "application/octet-stream"
  );

  res.setHeader(
    "Content-Disposition",
    'attachment; filename="UYywagdwyu2waud.bin"'
  );

  res.send(buffer);
}
