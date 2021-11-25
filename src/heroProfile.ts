function heroProfile(data: any) {
  return {
    name: data.name,
    group: data.group,
    family: data.family,
    power: data.power,
    movieCount: data.movieCount,
  };
}

export default heroProfile;
