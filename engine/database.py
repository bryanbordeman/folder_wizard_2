import os
import os.path
import sqlite3

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
database = os.path.join(BASE_DIR, "protaskinate.db")


def main():
    pass

def execute_db_query(query, parameters=()):
        with sqlite3.connect(database) as conn:
            cursor = conn.cursor()
            query_result = cursor.execute(query, parameters)
            conn.commit()
        return query_result

# def create_table():
#     execute_db_query(f"""CREATE TABLE IF NOT EXISTS 'service' (
#                     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
#                     project_number text,
#                     project_name text,
#                     project_category text,
#                     project_type text,
#                     type_code text,
#                     project_zip text,
#                     customer text,
#                     quote text,
#                     terms text,
#                     tax text,
#                     billing text,
#                     labor_code text,
#                     order_type text,
#                     price text
#                     );""")

# def add_to_table():
#     table = 'service'
#     execute_db_query(f"""INSERT INTO {table} (
#                                     project_number,
#                                     project_name,
#                                     project_category,
#                                     project_type,
#                                     type_code,
#                                     project_zip,
#                                     customer,
#                                     quote,
#                                     terms,
#                                     tax,
#                                     billing,
#                                     labor_code,
#                                     order_type,
#                                     price
#                                     ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);""", (str(21116),
#                                     str("LG Health"),
#                                     str("Door Service"),
#                                     str('RF Door Service'),
#                                     str("SVC-RFS"),
#                                     str(17601),
#                                     str('LG Health'),
#                                     str('Q21-230'),
#                                     str('NET 30'),
#                                     str('No'),
#                                     str('Unknown'),
#                                     str(''),
#                                     str('House'),
#                                     str(3177))
#                                     )


if __name__ == "__main__":
    main()