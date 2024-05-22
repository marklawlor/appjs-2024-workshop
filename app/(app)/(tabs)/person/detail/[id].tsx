import { useLocalSearchParams, Navigator } from "expo-router";
import { usePerson } from "@/lib/hooks/usePerson";
import { PersonCard } from "@/lib/components/PersonCard";

export default function Detail() {
  const { id } = useLocalSearchParams();
  if (typeof id !== "string") {
    return null;
  }

  const person = usePerson(id);
  return person ? <PersonCard item={person} /> : null;
}
