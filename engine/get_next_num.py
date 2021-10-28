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
# data_type = sys.argv[1]

def main():
    # print(get_next_opp_num('project'))
    # print(get_next_opp_num('opportunity'))
    print(get_next_opp_num('service'))
    # add_to_table()

    # sys.stdout.write(get_next_opp_num(data_type))

def execute_db_query(query, parameters=()):
        with sqlite3.connect(database) as conn:
            cursor = conn.cursor()
            query_result = cursor.execute(query, parameters)
            conn.commit()
        return query_result

def get_next_opp_num(data_type):
    '''fetch opportunity from database'''
    year = time.strftime("%Y")[2:]

    if data_type == 'opportunity':
        table = 'opportunity'

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

    elif data_type == "project":
        table = 'project'

        table_str = execute_db_query(
            f"SELECT * FROM {table} ORDER BY rowid DESC LIMIT 1;")  # makes

        last_project_number = (table_str.fetchall()[0][1])
        current_project_year = last_project_number[-2:]

        if current_project_year == year:
            next_number = int(last_project_number[:3])+1
            next_number_str = f'{next_number}{current_project_year}'
        else:
            next_number = '100'
            next_number_str = f'{next_number}{year}'

        return next_number_str

    elif data_type == "service":
        table = 'service'

        table_str = execute_db_query(
            f"SELECT * FROM {table} ORDER BY rowid DESC LIMIT 1;")  # makes

        last_service_number = (table_str.fetchall()[0][1])
        current_service_year = last_service_number[:2]

        if current_service_year == year:
            next_number = int(last_service_number[-3:])+1
            if len(str(next_number)) == 2:
                next_number_str = f'{current_service_year}0{next_number}'
            elif len(str(next_number)) == 3:
                next_number_str = f'{current_service_year}{next_number}'
        else:
            next_number = '001'
            next_number_str = f'{year}{next_number}'

        return next_number_str

    # elif data_type == "HSE":
    #     table = 'HSE'

def create_table():
    execute_db_query(f"""CREATE TABLE IF NOT EXISTS 'service' (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    project_number text,
                    project_name text,
                    project_category text,
                    project_type text,
                    type_code text,
                    project_zip text,
                    customer text,
                    quote text,
                    terms text,
                    tax text,
                    billing text,
                    labor_code text,
                    order_type text,
                    price text
                    );""")

def add_to_table():
    table = 'service'
    execute_db_query(f"""INSERT INTO {table} (
                                    project_number,
                                    project_name,
                                    project_category,
                                    project_type,
                                    type_code,
                                    project_zip,
                                    customer,
                                    quote,
                                    terms,
                                    tax,
                                    billing,
                                    labor_code,
                                    order_type,
                                    price
                                    ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);""", (str(21116),
                                    str("LG Health"),
                                    str("Door Service"),
                                    str('RF Door Service'),
                                    str("SVC-RFS"),
                                    str(17601),
                                    str('LG Health'),
                                    str('Q21-230'),
                                    str('NET 30'),
                                    str('No'),
                                    str('Unknown'),
                                    str(''),
                                    str('House'),
                                    str(3177))
                                    )
if __name__ == "__main__":
    main()
