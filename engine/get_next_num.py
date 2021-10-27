'''==========================================
Title:  get_next_num.py
Author:  Bryan Bordeman
Start Date:  062219
Updated:  102521 (added next_service_num())
Version:  support script

;=========================================='''

import time
import sqlite3
import sys
import os
import os.path

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
database = os.path.join(BASE_DIR, "protaskinate.db")

def main():
    sys.stdout.write(get_next_opp_num())

def execute_db_query(query, parameters=()):
        with sqlite3.connect(database) as conn:
            cursor = conn.cursor()
            query_result = cursor.execute(query, parameters)
            conn.commit()
        return query_result

def get_next_opp_num():
    '''fetch opportunity from database'''
    table = 'opportunity'
    year = time.strftime("%Y")[2:]

    table_str = execute_db_query(
        f"SELECT * FROM {table} ORDER BY rowid DESC LIMIT 1;")  # makes

    last_quote_number = (table_str.fetchall()[0][1])
    current_quote_year = last_quote_number[1:3]

    if current_quote_year == year:
        next_number = int(last_quote_number[4:])+1
        next_number_str = f'Q{current_quote_year}-{str(next_number)}'
    else:
        next_number = '001'
        next_number_str = f'Q{year}-{str(next_number)}'

    return next_number_str

if __name__ == "__main__":
    main()
