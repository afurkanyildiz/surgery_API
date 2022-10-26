import psycopg2
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate
from reportlab.platypus.tables import Table,TableStyle,colors
path = 'root/hasta_kayit/surgery_API_main/report.pdf'

conn = psycopg2.connect(database='hbys_filyos', user='healmedy', password='mhacare1', host='116.202.18.80', port='5432')

cursor = conn.cursor()
date = cursor.execute("SELECT NOW()::DATE")
print(date)
cursor.execute("SELECT * FROM records_records where date='date'")
data = cursor.fetchall()
print(data)

conn.close()