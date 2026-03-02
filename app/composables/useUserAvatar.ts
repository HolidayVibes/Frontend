import { computed } from "vue";
import { useUserStore } from "#imports";

export function useUserAvatar() {
  const userStore = useUserStore();

  const user = computed(() => userStore.user);

  const avatar = computed(() => {
    if (!user.value) return "??";

    if (user.value.avatarUrl) return user.value.avatarUrl;

    return `${user.value.lastName?.[0] ?? ""}${
      user.value.firstName?.[0] ?? ""
    }`.toUpperCase();
  });

  const avatarColor = computed(() => {
    if (!user.value || user.value.avatarUrl) return "";

    return useGenerateAvatarColor(
      `${user.value.firstName ?? ""}${user.value.lastName ?? ""}`,
    );
  });

  return { avatar, avatarColor };
}

export function useGenerateAvatarColor(name: string): string {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0; // 32bit
  }

  const hue = Math.abs(hash) % 360;

  const saturation = 65;
  const lightness = 55;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
