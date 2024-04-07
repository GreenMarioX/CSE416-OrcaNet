import random

file_exts = ["mp4", "mp3", "docx", "pptx", "xlsx", "pdf", "py", "rs"]
file_size_units = ["KiB", "MiB", "GiB", "TiB"]
file_statuses = ["downloading", "paused", "error", "completed"]
file_time_units = ["s", "min", "h", "d"]

def rand_name() -> str:
  sequence = list("aabcdeefghiijklmnoopqrstuuv_")
  random.shuffle(sequence)
  return ''.join(sequence)[:random.randint(3, 15)]

def rand_date() -> str:
  year = ("0000" + str(random.randint(1980, 2023)))[-4:]
  month = ("00" + str(random.randint(1, 12)))[-2:]
  day = ("00" + str(random.randint(1, 28)))[-2:]
  hour = ("00" + str(random.randint(0, 23)))[-2:]
  minute = ("00" + str(random.randint(0, 59)))[-2:]
  second = ("00" + str(random.randint(0, 59)))[-2:]
  return f'{year}-{month}-{day} {hour}:{minute}:{second}'

def main():
  num = int(input("Enter number of jobs: "))
  output = "["
  for i in range(num):
    id = i + 1
    file_name = f'{rand_name()}.{random.choice(file_exts)}'
    file_size = f'{random.randint(1, 1023)} {random.choice(file_size_units)}'
    status = random.choice(file_statuses)
    remaining_time = f'{random.randint(1, 23)} {random.choice(file_time_units)}'
    time_queued = rand_date()

    text = " {"
    text += f'id:"{id}",'
    text += f'fileName:"{file_name}",'
    text += f'fileSize:"{file_size}",'
    text += f'status:"{status}",'
    text += f'remainingTime:"{remaining_time}",'
    text += f'timeQueued:"{time_queued}"'
    text += "},"

    output += text
  output +=  " ]"

  print(output)

if __name__ == "__main__":
  main()