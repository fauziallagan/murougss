const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "/api";

export async function getWorkshops() {
  const res = await fetch(`${BASE_URL}/workshops`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.docs;
}

export async function getCompetitions() {
  const res = await fetch(`${BASE_URL}/competitions`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.docs;
}

export async function getPraktikums() {
  const res = await fetch(`${BASE_URL}/Praktikums`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.docs;
}