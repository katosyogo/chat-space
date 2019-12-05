# Chat-Space DB設計図
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
## Association
- has_many :gropes
- has_many :commnts

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreing_key: true|
|phote|img|null: false
## Association
- belongs_to :user
- has_many :gropes_comments
- has_many :gropes, through: :gropes_comments

## gropeテーブル
|Column|Type|Options|
|------|----|-------|
|gropename|string|null: false|
|chatmember|string|null: false|
## Association
- belongs_to :user
- has_many :gropes_comments
- has_many :comments, through: :gropes_comments

## grope_commentsテーブル
|Clumn|Type|Options|
|-----|----|-------|
|grope_id|integer|null: false, foreign_key: ture|
|comments_id|integer|null: false, foreign_key: ture|
## Association
- belongs_to :grope
- belongs_to :user