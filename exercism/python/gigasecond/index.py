import datetime
def add(moment: datetime) -> datetime:
  return moment + datetime.timedelta(seconds=int(1e9))