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
import asyncio

# global var ----------------------------

database = 'protaskinate.db'


async def main():
    next_opp_num = str(get_next_opp_num())
    await asyncio.sleep(1)
    print(next_opp_num)
    # await sys.stdout.write(next_opp_num).flush()


# def main():
#     # next_opp_num = str(get_next_opp_num())
#     # test = 'test'
#     # print(next_opp_num)
#     sys.stdout.write(test_func()).flush()
   
def test_func():
    return 'test string'

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
        f"""SELECT * FROM {table} ORDER BY rowid DESC LIMIT 1;""")  # makes

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
    # main()
    asyncio.run(main())
# else:
    # print(str(get_next_opp_num()))
    # print('Q21-388')
    # sys.stdout.flush()
