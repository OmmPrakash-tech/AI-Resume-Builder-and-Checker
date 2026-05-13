print("Seeding ResumeAI database...")


demo_users = [
    {
        "name": "Omm",
        "email": "omm@example.com"
    },

    {
        "name": "Demo User",
        "email": "demo@example.com"
    }
]


for user in demo_users:

    print(f"Inserted {user['name']}")