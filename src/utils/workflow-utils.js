export function yesNo() {
  return [
    {
      '@type': 'Answer',
      text: 'yes'
    },
    {
      '@type': 'Answer',
      text: 'no'
    }
  ];
}

export function agent(roleName, name) {
  const role = {
    '@type': 'ContributorRole',
    roleName
  };

  if (name) {
    role.name = name;
  }

  return role;
}

export function audience(...roleNames) {
  if (roleNames.length === 1 && roleNames[0] === 'all') {
    roleNames = ['editor', 'author', 'reviewer', 'producer'];
  }
  return roleNames.map(audienceType => {
    return {
      '@type': 'Audience',
      audienceType
    };
  });
}
