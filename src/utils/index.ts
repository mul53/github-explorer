export const transformRepoData = (data: any) => ({
  id: data?.id,
  name: data?.name,
  description: data?.description,
  stars: data?.stargazers_count,
  organization: data?.owner?.login,

  language: data?.language,
  issues: data?.open_issues,
  forks: data?.forks,
  watchers: data?.watchers,
  htmlUrl: data?.html_url,
  cloneUrl: data?.clone_url,
  sshUrl: data?.ssh_url,
});

export function truncateText(text: string, length = 80) {
  return text?.length > length ? `${text.slice(0, length)}...` : text;
}
