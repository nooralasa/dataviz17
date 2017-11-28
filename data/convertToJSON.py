import csv 
import json

data = []

def convertRow(row):
	point = {}
	# point['t'] = float(row[0])
	# point['lfp'] = float(row[1])
	point['x'] = float(row[2])
	point['y'] = float(row[3])
	point['p'] = row[4]
	if row[5]=="N":
		point["shape"] = "Circle"
	else:
		point["shape"] = "Square"
	return point
	
count = 0
with open('sample_data.csv', 'rt', encoding="utf8") as csvfile:
	spamreader = csv.reader(csvfile, delimiter=',')
	for row in spamreader:
		if count != 0:
			data.append(convertRow(row))
		count+=1
		

with open('data.json', 'w') as outfile:
	json.dump(data, outfile)

# print(data)



print("Done with ", count, "rows")